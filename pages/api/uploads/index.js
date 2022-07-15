import { Storage } from '@google-cloud/storage';

export default async function handler(req, res) {
  const storage = new Storage({
    projectId: process.env.PROJECT_ID,
    credentials: {
      client_email: process.env.CLIENT_EMAIL,
      private_key: process.env.PRIVATE_KEY,
    },
  });

  async function configureBucketCors() {
    await storage.bucket(process.env.BUCKET_NAME).setCorsConfiguration([
      {
        method: ['POST'],
        origin: ['*'],
      },
    ]);
  }

  configureBucketCors();

  const bucket = storage.bucket(process.env.BUCKET_NAME);
  const file = bucket.file(req.query.file);
  const options = {
    expires: Date.now() + 24 * 60 * 60 * 1000,
    fields: { 'x-goog-meta-test': 'data' },
  };

  const [response] = await file.generateSignedPostPolicyV4(options);
  res.status(200).json(response);
}

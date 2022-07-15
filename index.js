const pulumi = require('@pulumi/pulumi');
const gcp = require('@pulumi/gcp');

const bucket = new gcp.storage.Bucket('borgfy-storage-bucket', {
  cors: [
    {
      methods: ['POST'],
      origins: ['*'],
      responseHeaders: ['*'],
    },
  ],
  forceDestroy: true,
});

exports.bucketName = bucket.url;

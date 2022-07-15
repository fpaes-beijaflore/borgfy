import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';

function ConfirmDeletePost(row, refreshData) {
  return confirmAlert({
    title: 'Confirm to Delete',
    message: 'Are you sure you want delete this post ?',
    buttons: [
      {
        label: 'Yes',
        onClick: () => {
          axios.delete(`https://borgfy.vercel.app/api/posts/${row._id}`).then(() => {
            refreshData();
          });
        },
      },
      {
        label: 'No',
        onClick: () => {
          refreshData();
          alert('Operation canceled');
        },
      },
    ],
  });
}

export default ConfirmDeletePost;

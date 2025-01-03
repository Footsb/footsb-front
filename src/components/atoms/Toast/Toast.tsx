import { ToastOptions, toast } from 'react-toastify';

const ToastContainer = ({ text }: { text: string }) => {
  return <div className="text-white text-sm">{text}</div>;
};

const commonStyle = {
  maxWidth: '335px',
  backgroundColor: '#3a3a3a',
  borderRadius: '20px',
  padding: '0px 12px',
  margin: '0px auto 40px',
};

const ToastSuccess = (message: string, options: ToastOptions = {}) => {
  toast.success(<ToastContainer text={message} />, {
    style: commonStyle,
    ...options,
  });
};

const ToastError = (message: string, options: ToastOptions = {}) => {
  toast.error(<ToastContainer text={message} />, {
    style: commonStyle,
    ...options,
  });
};

const ToastInfo = (message: string, options: ToastOptions = {}) => {
  toast.info(<ToastContainer text={message} />, {
    style: commonStyle,
    ...options,
  });
};

const showToast = (type: string, message: string) => {
  if (type === 'success') {
    ToastSuccess(message);
  } else if (type === 'error') {
    ToastError(message);
  } else {
    ToastInfo(message);
  }
};

export default showToast;

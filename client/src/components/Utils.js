import { toast } from "react-toastify";

export const handleSuccess = (msg,duration = 1000) => {
  toast.success(msg, {
    position: "top-right",
    closeOnClick: true,
    draggable: true,
    autoClose: duration,
    pauseOnHover: false,
    hideProgressBar:false,
closeOnClick:true
  });
};
export const handleError = (msg) => {
  toast.error(msg, {
    position: "top-right",
  });
};


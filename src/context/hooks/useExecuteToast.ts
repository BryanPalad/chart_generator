import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const useExecuteToast = () => {
    const notify = (message: string) => {
        toast(message);
    };

    return { notify, ToastContainer };
};
import { Toaster } from "react-hot-toast";

export default function ToastContainer() {
  return (
    <Toaster
      position="bottom-left"
      reverseOrder={false}
      gutter={8}
      toastOptions={{
        duration: 2000,
        style: {
          background: '#121212',
          color: '#fff',
        },
      }}
    />
  );
}
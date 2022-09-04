import "./App.css";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_19wph57",
        "template_5azc63q",
        e.target,
        "pseyZgCt-ajN9Qd_r"
      )
      .then(
        (result) => {
          if (result.status === 200) {
            toast.success("پیام شما با موفقیت ارسال شد", {
              position: "top-right",
              closeOnClick: true,
            });
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className="container py-5">
      <div className="row py-5 justify-content-center">
        <div className="col-md-4 bg-white p-5 mt-5">
          <h2 className="pb-5 text-center">ارسال پیام به مدیریت</h2>
          <form onSubmit={sendEmail}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="نام شما"
              />
            </div>
            <div className="form-group">
              <input
                name="email"
                type="text"
                className="form-control"
                placeholder="ایمیل شما"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                className="form-control"
                placeholder="پیام شما"
              />
            </div>
            <div className="form-group">
              <button
                className="btn btn-success w-100 text-white p-2  mt-5"
                value="ارسال"
              >
                ارسال{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;

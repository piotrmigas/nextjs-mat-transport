import React from "react";
import { useForm } from "react-hook-form";
import { useAlert } from "react-alert";
import { useTranslation } from "next-i18next";
import emailjs, { init } from "emailjs-com";
import DatePicker from "react-date-picker/dist/entry.nostyle";
import "react-calendar/dist/Calendar.css";
import "react-date-picker/dist/DatePicker.css";

const Form = () => {
  const { t } = useTranslation("common");

  const [date, setDate] = React.useState("");

  init(process.env.NEXT_PUBLIC_EMAILJS);

  const alert = useAlert();

  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data, e) => {
    emailjs
      .send("gmail", "template_1G20d3s3", {
        message_html: data.message,
        start_date: date === "" ? "" : date.toLocaleDateString("pl-PL"),
        from_name: data.name,
        from_surname: data.surname,
        from_phone: data.phone,
        reply_to: data.email,
      })
      .then(() => {
        alert.success(t`contact.alertSuccess`);
        e.target.reset();
      })
      .catch(() => alert.error(t`contact.alertError`));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="contact">
      <div className="mb-3">
        <label className="form-label">{t`contact.formName`}</label>
        <input type="text" name="name" className="form-control" ref={register({ required: true })} />
      </div>
      <div className="mb-3">
        <label className="form-label">{t`contact.formSurname`}</label>
        <input type="text" name="surname" className="form-control" ref={register({ required: true })} />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" name="email" ref={register({ required: true })} />
      </div>
      <div className="mb-3">
        <label className="form-label">{t`contact.formPhone`}</label>
        <input type="text" name="phone" className="form-control" ref={register} />
      </div>
      <div className="mb-3">
        <label className="form-label">{t`contact.formDate`}</label>
        <div>
          <DatePicker
            onChange={setDate}
            value={date}
            calendarIcon={null}
            format="dd-MM-y"
            monthPlaceholder="mm"
            dayPlaceholder="dd"
            yearPlaceholder={t`contact.formDatePicker`}
          />
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">{t`contact.formMessage`}</label>
        <textarea name="message" cols="10" rows="4" className="form-control" ref={register({ required: true })} />
      </div>
      <div className="row">
        <div className="col text-center">
          <button
            className={`btn ${!formState.isValid ? "btn-outline-primary" : "btn-primary"} shadow-none text-center`}
            type="submit"
          >
            {t`contact.formBtn`}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;

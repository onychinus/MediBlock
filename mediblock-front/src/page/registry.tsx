import { useState } from "react";
//import axios from "axios";

export const Registry = () => {
  const [form, setForm] = useState({
    薬局: "",
    医療機関: "",
    薬の名前: "",
    頻度: ""
  });

  const handleChange = (event: any) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    
  };

  return (
    <div>
      <h1>登録画面</h1>
      <form onSubmit={handleSubmit}>
        <div>
          薬局:{" "}
          <input type="text" name="薬局" value={form.薬局} onChange={handleChange} />
        </div>
        <div>
          医療機関:{" "}
          <input
            type="text"
            name="医療機関"
            value={form.医療機関}
            onChange={handleChange}
          />
        </div>
        <div>
          薬の名前:{" "}
          <input
            type="text"
            name="薬の名前"
            value={form.薬の名前}
            onChange={handleChange}
          />
        </div>
        <div>
          頻度: <input type="text" name="頻度" value={form.頻度} onChange={handleChange} />
        </div>
        <button type="submit">登録</button>
      </form>
    </div>
  );
};
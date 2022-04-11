import { useState, useEffect } from 'react';
import Layout from '../Components/layout';
const Formone = () => {
   const [errors, setErrors] = useState({
      nama: '',
      email: '',
   });
   const [data, setData] = useState([]);
   const submitHandle = async (e) => {
      e.preventDefault()
      const form = e.target;
      const nama = form.nama.value;
      const email = form.email.value;
      const nohp = form.nohp.value;
      const lbp = form.lbp.value;
      const namaRegex = /^[a-zA-Z ]+$/;
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

      const error = [];
      if (!namaRegex.test(nama)) {
         error.nama = 'Nama tidak boleh huruf';
      } else {
         error.nama = '';
      }

      if (nohp.length < 9 || nohp.length > 14) {
         error.nohp = 'Nomor HP tidak boleh kurang 9 dan lebih dari 14';
      } else {
         error.nohp = '';
      }
      if (error.nama != '' || error.nohp != '') {
         setErrors({
            nama: error.nama,
            // email: error.email,
            nohp: error.nohp
         })
      } else {
         const newData = [...data, { nama, email, lbp, nohp }];
         setData(newData);
         form.reset();
         setErrors({
            nama: '',
            email: ''
         })
      }
   }
   useEffect(() => {
      console.log(errors)
      console.log(data)
   }, [errors])
   return (
      <Layout title="Pendaftaran Peserta Coding Bootcamp">
         <div className="container">
            <div className="">
               <form method="POST" onSubmit={(e) => submitHandle(e)}>
                  <input type="text" required placeholder="Nama" name="nama" />
                  <span style={{ color: "red" }}>    {errors.nama}</span>
                  <input type="email" required placeholder="Email" name="email" />
                  <span style={{ color: "red" }}>    {errors.email}</span>
                  <input type="number" required placeholder="No Handphone" name="nohp" minLength={9} maxLength={14} />
                  <span style={{ color: "red" }}>    {errors.nohp}</span>
                  <label style={{ display: "block", fontSize: "20px" }}>
                     Latar Belakang Pendidikan
                  </label>
                  <label>
                     <input name="lbp" type="radio" value="It" />
                     <span>IT</span>
                  </label>
                  <br />
                  <label>
                     <input name="lbp" type="radio" value="NonIt" />
                     <span>NON IT</span>
                  </label>
                  <br /><br />
                  <input type="file" required name="gambar" />
                  <br />
                  <br />
                  <textarea placeholder="Harapan untuk coding bootcamp ini"></textarea>
                  <button type="submit" style={{ backgroundColor: "green" }}>SUBMIT</button>
                  <button type="reset" style={{ backgroundColor: "red" }}>RESET</button>
               </form>
               <br />

               SUKSES :
               <br />
               {data.map((item, index) => {
                  return (
                     <div style={{ color: "green" }} key={index}>
                        {item.nama} - {item.email} - {item.lbp} - {item.nohp}
                        <br />
                        =====================================================
                     </div>)
               })}
            </div>
         </div></Layout>
   )
}
export default Formone;
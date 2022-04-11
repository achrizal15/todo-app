import { useState } from "react";
import { Nav, Button, Tabs, Sonnet, Tab, Image } from "react-bootstrap";
import Layout from "../Components/layout";

const Navs = () => {
   const [tabs, setTabs] = useState("html");
   return (
      <Layout title="Tabs">
         Saya Menggunakan Global Provider Untuk Membuat menu yang aktif
         <Image src={require("../Assets/images/context.JPG")}/>
         <Tabs defaultActiveKey="profile" activeKey={tabs} onSelect={(e) => setTabs(e)} id="uncontrolled-tab-example" className="mb-3 mt-3">
            <Tab eventKey="Git" title="Git">
               <Image width="50%" src="https://www.git-scm.com/images/logos/downloads/Git-Logo-2Color.png" />
               <div className="pt-2" style={{ textAlign: "justify" }}>
                  Pengertian UI/UX User Interface (UI) merupakan desain antarmuka yang fokus pada keindahan dari sebuah tampilan, dan pemilihan warna yang baik. Tujuannya, untuk membuat tampilan situs lebih enak dipandang mata dan pengunjung pun jadi betah berlama-lama. UI menciptakan ikatan emosional dengan pengguna melalui desain yang menarik dan indah. Biasanya, UI akan diimplementasikan atau dikerjakan setelah UX selesai menentukan desain layout, logo, warna, dan typography untuk mempercantik situs yang kamu miliki. User Experience (UX) merupakan proses meningkatkan kepuasan pengguna situs atau aplikasi tertentu melalui kegunaan dan kesenangan yang diberikan dalam interaksi antara pengguna dan produk. UX design inilah yang memungkinkan suatu situs bisa digunakan dengan mudah, sehingga tidak membingungkan pengguna. UX mencakup keseluruhan elemen dari suatu website. Termasuk di dalamnya, memastikan website tersusun dengan baik, dan pengguna mudah berpindah dari satu halaman ke halaman lain.
               </div>
            </Tab>
            <Tab eventKey="html" title="Html">
               <Image width="50%" src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png" />
               <Image src={require("../Assets/images/Html.JPG")} width="50%" />
               <div className="pt-2" style={{ textAlign: "justify" }}>
                  Pengertian HTML HTML adalah bahasa standar pemrogaman yang digunakan untuk membuat halaman website, yang diakses melalui internet. Singkatan dari "Hypertext Markup Language" atau "bahasa markup". Dilansir Techterms, "Hypertext" mengacu pada hyperlink yang mungkin terdapat dalam halaman HTML. Bahasa markup ini mengacu pada cara tag yang digunakan, untuk menentukan tata letak halaman dan elemen di dalam halaman.
                  Fungsi HTML Dikutip dari Computerhope, HTML digunakan untuk membuat dokumen elektronik (disebut halaman) yang ditampilkan di World Wide Web (www). Setiap halaman berisi serangkaian koneksi ke halaman lain yang disebut hyperlink. Setiap halaman web yang Anda lihat di Internet ditulis menggunakan satu versi kode HTML atau yang lain. Kode HTML memastikan format teks dan gambar yang tepat untuk browser Internet. Tanpa HTML, browser tidak akan tahu bagaimana menampilkan teks sebagai elemen atau memuat gambar atau elemen lainnya. HTML juga menyediakan struktur dasar halaman, di mana Cascading Style Sheets dihamparkan untuk mengubah tampilannya.

                  Sejarah HTML HTML pertama kali dikembangkan oleh Tim Berners-Lee dari organisasi European Organization for Nuclear Research (CERN) tahun 1990. Markup language atau HTML ini diciptakan oleh suatu perusahaan penjual perangkat keras dan lunak yakni IBM atau International Bussiness Machines. Sekitar era 1980an, IBM menciptakan sebuah bahasa yang menggabungkan tag atau simbol dengan teks dalam sebuah dokumen. Bahasa yang diciptakan oleh IBM ini dikenal dengan sebutan markup language atau Generalized markup language (GML).</div>
            </Tab>

            <Tab eventKey="Css" title="Css">
               <Image width="50%" src={require("../Assets/images/css.JPG")} />
               <div className="pt-2" style={{ textAlign: "justify" }}>
                  Pengertian CSS CSS adalah kepanjangaan dari Cascading Style Sheets yang berguna untuk menyederhanakan proses pembuatan website dengan mengatur elemen yang tertulis di bahasa markup. CSS dipakai untuk mendesain halaman depan atau tampilan website (front end). CSS menangani tampilan dan ‘rasa’ dari halaman website. Ada banyak hal yang dapat Anda lakukan menggunakan CSS dibandingkan dengan bahasa pemrograman inti seperti HTML dan PHP. Ketika menggunakan CSS, Anda dapat mengatur warna teks, jenis font, baris antar paragraf, ukuran kolom, dan jenis background yang dipakai. Tidak hanya itu CSS juga bisa untuk mendesain layout, variasi tampilan di berbagai perangkat yang berbeda, dan berbagai efek yang dipakai di dalam website. CSS sangat mudah dipelajari, tapi juga powerful karena dapat mengontrol penyajian tampilan dari dokumen HTML. Mulai dari yang simpel sampai kompleks. Tidak heran jika saat ini CSS hampir dipakai di berbagai website untuk dikombinasikan dengan HTML maupun PHP.

                  Keuntungan Menggunakan CSS

                  Mempercepat Proses Desain Sesuai dengan pengertian CSS, jika menggunakan CSS, Anda tidak perlu melakukan itu lagi.CSSApa yang akan Anda lakukan jika menggunakan desain yang sama di beberapa halaman HTML? Anda mungkin akan menyalin satu per satu ke setiap file halaman. Jika menggunakan CSS, Anda tidak perlu melakukan itu lagi. Ketika menggunakan CSS, Anda cukup mengetikkan satu kali fungsi CSS kemudian menggunakannya di berbagai halaman HTML. Fungsi CSS yang Anda buat dalam satu file dapat Anda panggil ke berbagai halaman web tanpa harus menyalin baris kode fungsi berkali-kali.

                  Halaman Lebih Cepat Dimuat Jika menggunakan CSS, Anda tidak perlu menuliskan atribut tag HTML di setiap file. Anda hanya cukup menulis satu aturan CSS dan menerapkannya di berbagai file yang membutuhkannya hanya dengan memanggilnya. Jadi satu file hanya mengandung sedikit baris kode yang dimuat. Nah, sedikit baris kode inilah yang akan membuat proses download menjadi lebih cepat.

                  Proses Pemeliharaan Mudah CSS memudahkan Anda untuk mengubah tampilan di berbagai halaman. Hanya dengan mengubah fungsi style di file CSS maka seluruh tampilan yang menggunakan fungsi tersebut akan berubah secara otomatis.

                  Style Lebih Beragam Dibanding HTML CSS mempunyai atribut lebih beragam dibandingkan dengan HTML. Apa keuntungannya? Anda mempunyai lebih banyak pilihan tampilan halaman website.

                  Kompatibel Dengan Berbagai Macam Perangkat CSS memungkinkan konten Anda dapat dioptimasi di lebih dari satu perangkat. Misal ketika memproses sebuah dokumen. Jika menggunakan CSS, Anda bisa menyesuaikan tampilan dokumen di perangkat versi lama sekaligus di versi yang baru.

                  CSS Menjadi Standar Pengembangan Website Hampir seluruh website yang ada di internet menggunakan CSS di dalamnya. Selain tampilannya yang lebih menarik, kebanyakan browser populer saat ini juga mendukung CSS. Jadi jika Anda ingin mengembangkan website yang sesuai standar browser populer, sebaiknya gunakan CSS. Anda pasti juga ingin website dapat kompatibel dengan berbagai macam browser kan?.</div>
            </Tab>
            <Tab eventKey="Bootstrap" title="Bootstrap">
               <Image width="50%" src={require("../Assets/images/bootstrap.JPG")} />
               <div className="pt-2" style={{ textAlign: "justify" }}>
                  Pengertian Bootstrap Bootstrap adalah framework HTML, CSS, dan JavaScript yang berfungsi untuk mendesain website responsive dengan cepat dan mudah. Framework open source ini diciptakan pada tahun 2011 oleh Mark Otto dan Jacob Thornton dari Twitter. Itulah kenapa dulunya Bootstrap dinamakan Twitter Blueprint. Bootstrap dengan cepat meraih popularitas digunakan oleh 27% website di seluruh dunia. Hal itu karena kesederhanaan dan konsistensi yang ditawarkan Bootstrap dibanding framework lainnya saat itu. Kemudahan yang ditawarkan oleh Bootstrap adalah Anda tak perlu coding komponen website dari nol. Framework ini tersusun dari kumpulan file CSS dan JavaScript berbentuk class yang tinggal pakai. Class yang disediakan Bootstrap juga cukup lengkap. Mulai dari class untuk layout halaman, class menu navigasi, class animasi, dan masih banyak lainnya. Menariknya lagi, Bootstrap bersifat responsive berkat grid system yang digunakan. Sistem grid pada bootstrap menggunakan rangkaian containers, baris, dan kolom untuk menyesuaikan bentuk layout dan konten website Anda. Dengan kata lain, Bootstrap menjamin tampilan website Anda akan tetap rapi dan konsisten di berbagai perangkat pengunjung. Baik melalui smartphone, tablet, atau laptop.

                  Kegunaan Bootsrep • Menciptakan website Mobile Friendly , Berkat sistem grid, proses membuat website mobile friendly tak akan membutuhkan waktu lama. • Memudahkan resize gambar , Cukup dengan menambahkan class .img-responsive ke gambar, maka gambar tersebut akan otomatis di-resize sesuai ukuran layar pengguna. • Menambahkan elemen website tanpa ribet , Bootstrap menyediakan berbagai elemen yang bisa langsung Anda gunakan di website. Misalnya, navigasi, menu dropdown, thumbnail, dan sebagainya. • Membuat website lebih interaktif , Bootstrap juga memungkinkan Anda menggunakan plugin custom JQuery. Jadi, Anda bisa menambahkan berbagai elemen interaktif ke website dengan mudah. Misalnya, popup, transisi, image carousel, dan sebagainya.

                  Cara menggunakan bootsrep Ada berbagai cara yang bisa Anda lakukan untuk menggunakan Bootstrap. Sebab, Bootstrap memang menawarkan banyak manfaat. • Membuat tabel dengan Bootstrap , Ingin membuat tabel tanpa perlu mengetikkan berbaris-baris kode? Gampang, Anda hanya perlu menggunakan class “table” yang ada di dalam file Bootstrap. • Mengatur tampilan gambar dengan Bootstrap , Anda dapat membuat gambar yang responsif atau gambar yang berbentuk lingkaran dengan menggunakan class seperti “.img-responsive”, “.img-rounded”, ”img-circle”, dan ”img-thumbnail”. • Membuat panel dengan Bootstrap , Jika Anda ingin menampilkan pesan peringatan (alert), Anda bisa menggunakan class “alert” yang berisi pesan peringatan yang ingin dibuat. • Membuat tombol dengan Bootstrap , Ingin menambahkan tombol? Anda bisa membuatnya dengan mudah di Bootstrap, cukup gunakan class “btn” saja. • Membuat pesan peringatan dengan Bootstrap , Anda juga dapat membuat panel yang berisi header, body dan footer. Caranya dengan menggunakan class “panel”.</div>
            </Tab>
            <Tab eventKey="Javascript-Refreshment" title="Javascript Refreshment">
               <Image width="50%" src={require("../Assets/images/javascript.JPG")} />
               <div className="pt-2" style={{ textAlign: "justify" }}>
Pengertian JavaScript JavaScript adalah bahasa pemrograman yang paling banyak digunakan dalam pengembangan website, aplikasi, game, dan lainnya. Bahkan, produk dari perusahaan besar seperti Google, Facebook, dan LinkedIn juga telah menggunakan JavaScript. Dengan menguasai JavaScript, Kita bisa membuat website lebih menarik dan membuat pengunjung betah. Bahkan, Kita juga dapat mengembangkan game online berbasis web yang populer di kalangan anak muda. JavaScript sendiri sebenarnya biasanya dikolaborasikan dengan HTML dan CSS. Di mana HTML digunakan untuk membuat struktur website dan CSS untuk merancang style halaman website. Lalu, JavaScript berperan menambahkan elemen interaktif untuk meningkatkan engagement pengguna.</div>
            </Tab>
            <Tab eventKey="Figma" title="Figma">
               {/* <img width="50%" src="https://www.figma.com/static/images/logos/logo-figma-2x.png" /> */}
               <div className="pt-2" style={{ textAlign: "justify" }}>
                  Pengertian Figma Figma adalah adalah aplikasi berbasis web untuk mendesain UI dan UX yang dapat digunakan untuk membuat aplikasi, web, serta berbagai komponen user interface yang dapat digabungkan ke dalam project lainnya. Selain itu, figma adalah aplikasi untuk para desainer berkolaborasi dengan desainer lainnya dan membuat desain secara bersama-sama. Dalam membuat sebuah desain UI/UX di dalam suatu aplikasi atau website, Figma memiliki beberapa tools yang dapat memudahkan desainer untuk mendesain.

                  Fitur pada Figma • Alat pena modern yang memungkinkan Anda menggambar ke segala arah dan desain busur instan • Fitur font Open Type • Tugas otomatis melalui plugin untuk elemen berulang untuk mempercepat proyek • Alat seleksi cerdas dengan penyesuaian otomatis untuk pengaturan jarak, pengaturan, dan pengorganisasian • Metode dan cara fleksibel yang menghemat hak untuk proyek Anda • Kemampuan membuat sistem dan komponen desain • Perpustakaan dan cara drag and drop yang dapat diakses • Kemampuan untuk memawadagi banyak audien tanpa batas pada suatu proyek sehingga seluruh pembagian progress kerja tim • Kemampuan memeriksa file desain dan grab code sinppets • Fitur ekspor mudah yang memiliki tautan langsung (bukan hanya format PDF datar)</div>
            </Tab>
            <Tab eventKey="Clean-Code" title="Clean Code">
               <Image width="50%" src={require("../Assets/images/cleancode.JPG")} />
               <div className="pt-2" style={{ textAlign: "justify" }}>
               Pengertian Clean Code Clean Code memiliki arti kode yang bersih. Lalu, apa maksudnya? Kode yang bersih adalah kode program yang memiliki format yang benar dan rapi, serta memiliki struktur kode yang tertata dengan baik. Kode program yang sudah menerapkan Clean Code akan lebih mudah dibaca dan dimengerti karena setiap potongan kodenya memiliki arti dan fungsi sesuai tugasnya masing-masing.

Fungsi Dari Clean Code Penerapan Clean Code dimaksudkan agar kode program yang kita buat dapat lebih mudah dibaca dan dipahami oleh programmer lainnya dalam pengerjaan suatu project. Selain itu, apabila suatu program yang kita buat harus dilanjutkan atau di-maintain oleh programmer lain. Programmer tersebut dapat tetap meng-handle program kita dengan baik.

Kegunaan Clean Code Clean Code merupakan bagian dari salah satu metode pengembangan software yakni Agile. Namun, tidak ada salahnya untuk menerapkan Clean Code dalam setiap kode program yang kita buat. Jika didasarkan pada fungsi Clean Code, kita dapat melihat bahwa Clean Code ditujukan untuk memaksimalkan proses kolaborasi dengan programmer lainnya. Oleh karena itu, Clean Code sangat penting dan sangat membantu proses pengembangan software yang adaptif. Yang kebutuhannya selalu berubah dan berkembang.</div>
            </Tab>
            <Tab eventKey="Introduction-UI-UX" title="Introduction UI UX">
        <Image width="50%" src={require("../Assets/images/uiux.JPG")} />
               <div className="pt-2" style={{ textAlign: "justify" }}>
               Pengertian UI/UX User Interface (UI) merupakan desain antarmuka yang fokus pada keindahan dari sebuah tampilan, dan pemilihan warna yang baik. Tujuannya, untuk membuat tampilan situs lebih enak dipandang mata dan pengunjung pun jadi betah berlama-lama. UI menciptakan ikatan emosional dengan pengguna melalui desain yang menarik dan indah. Biasanya, UI akan diimplementasikan atau dikerjakan setelah UX selesai menentukan desain layout, logo, warna, dan typography untuk mempercantik situs yang kamu miliki. User Experience (UX) merupakan proses meningkatkan kepuasan pengguna situs atau aplikasi tertentu melalui kegunaan dan kesenangan yang diberikan dalam interaksi antara pengguna dan produk. UX design inilah yang memungkinkan suatu situs bisa digunakan dengan mudah, sehingga tidak membingungkan pengguna. UX mencakup keseluruhan elemen dari suatu website. Termasuk di dalamnya, memastikan website tersusun dengan baik, dan pengguna mudah berpindah dari satu halaman ke halaman lain.</div>
            </Tab>

         </Tabs>
      </Layout>
   )
}
export default Navs;
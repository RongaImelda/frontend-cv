import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      <body className='d-flex flex-column h-100'>
        <main className='flex-shrink-0'>
          <Hero />
          <section className='bg-light py-5'>
            <div className='container px-5'>
              <div className='row gx-5 justify-content-center'>
                <div className='col-xxl-8'>
                  <div className='text-center my-5'>
                    <h2 className='display-5 fw-bolder'>
                      <span className='text-gradient d-inline'>
                        Tentang Saya
                      </span>
                    </h2>
                    <div className='row mb-3 text-start'>
                      <div className='col-sm-6 py-2'>
                        <h6>
                          Nama:{' '}
                          <span className='text-secondary'>Imelda Ronga</span>
                        </h6>
                      </div>
                      <div className='col-sm-6 py-2'>
                        <h6>
                          Asal Daerah:{' '}
                          <span className='text-secondary'>Maluku Utara</span>
                        </h6>
                      </div>

                      <div className='col-sm-6 py-2'>
                        <h6>
                          Status:{' '}
                          <span className='text-secondary'>Masih Jomblo</span>
                        </h6>
                      </div>
                    </div>

                    <h3 className='text-gradient d-inline'>List Project</h3>
                    <div className='row mb-3 text-start'>
                      <div className='col-sm-6 py-2'>
                        <h6>
                          <strong>
                            1. Perancangan System Informasi Keuangan Sekolah
                          </strong>
                          <br />
                          Deskripsi: Sistem ini dibuat untuk memudahkan
                          pengelola keuangan di SMK Advent Tongute Goin untuk
                          membuat laporan keuangan lebih mudah.
                        </h6>
                      </div>
                      <div className='col-sm-6 py-2'>
                        <h6>
                          <strong>2. Expense Tracker App</strong>
                          <br />
                          Deskripsi: Aplikasi berbasis web yang digunakan untuk
                          melacak pengeluaran dan pemasukan pribadi dengan
                          tampilan user-friendly serta fitur analitik.
                        </h6>
                      </div>
                      <div className='col-sm-6 py-2'>
                        <h6>
                          <strong>3. School Finance Management System</strong>
                          <br />
                          Deskripsi: Sistem informasi berbasis web untuk
                          mengelola keuangan sekolah yang mencakup pelaporan
                          pemasukan, pengeluaran, dan pencatatan data transaksi.
                        </h6>
                      </div>
                      <div className='col-sm-6 py-2'>
                        <h6>
                          <strong>4. E-Commerce Platform</strong>
                          <br />
                          Deskripsi: Platform online untuk penjualan produk
                          dengan fitur pembayaran, manajemen stok, dan
                          notifikasi pesanan.
                        </h6>
                      </div>
                    </div>

                    <h3 className='text-gradient d-inline'>Media Sosial</h3>
                    <div className='d-flex justify-content-center fs-2 gap-4'>
                      <a
                        className='text-gradient'
                        href='https://www.instagram.com/imlrnga'>
                        <i className='fa-brands fa-instagram' />
                      </a>
                      <a
                        className='text-gradient'
                        href='https://www.facebook.com/imlrnga'>
                        <i className='fa-brands fa-facebook' />
                      </a>
                      <a
                        className='text-gradient'
                        href='https://www.tiktok.com/@bledac.geleda'>
                        <i className='fa-brands fa-tiktok' />
                      </a>
                      <a
                        className='text-gradient'
                        href='https://telegram.me/ImeldaRonga'>
                        <i className='fa-brands fa-telegram' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </body>
    </>
  );
}

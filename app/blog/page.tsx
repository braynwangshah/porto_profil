interface Artikel {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function HalamanBlog() {
  // Mengambil data dari API
  const respon = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  // Mengubah response menjadi JSON
  const daftarArtikel: Artikel[] = await respon.json();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Kumpulan Artikel Blog</h2>

      <p>Data di bawah ini diambil langsung dari internet.</p>

      <div style={{ display: "grid", gap: "15px" }}>
        {daftarArtikel.map((artikel) => (
          <div
            key={artikel.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "15px",
            }}
          >
            <h3 style={{ textTransform: "capitalize" }}>
              {artikel.title}
            </h3>

            <p>{artikel.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
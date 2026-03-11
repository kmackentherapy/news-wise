function Layout({ children }) {
  return (
    <div style={{
      fontFamily: "Inter, Arial, sans-serif",
      background: "#f7f9fc",
      minHeight: "100vh"
    }}>
      <div style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px 20px"
      }}>
        {children}
      </div>
    </div>
  );
}

export default Layout;
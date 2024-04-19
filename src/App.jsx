import { useEffect, useState } from "react";

function App() {
  const styles = {
    box: {
      marginTop:'-10px',
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
    },
    input: {
      height: "30px",
      width: "300px",
      border: "2px solid gray",
      outline: "none",
      borderTopLeftRadius: "10px",
      borderBottomLeftRadius: "10px",
      paddingLeft: 10,
    },
    btn: {
      padding: "8px 20px ",
      fontSize: 17,
      backgroundColor: "blue",
      color: "#fff",
      border: "none",
      borderTopRightRadius: "10px",
      borderBottomRightRadius: "10px",
      outline: "none",
    },
    download: {
     padding:'8px 10px',
      textDecoration: "none",
      margin:'-15px 0',
      
      background: "blue",
      color: "#ffffff",
      borderRadius: "10px",
    },
    output_box: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: "40px",
    },
  };

  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [size, setSize] = useState(300);
  const [bgColor, setBgColor] = useState("#ff2367");
  const [qrCode, setQrCode] = useState("");

  console.log("Qr COde is : ",qrCode);

  useEffect(() => {
    setQrCode(
      `http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`
    );
  }, [word, size, bgColor]);

  function handleClick() {
    setWord(temp);
  }

  return (
    <>
      <center>
        <div style={{ width: "500px" }}>
          <h1>QR Code Generator </h1>

          <div className="box" style={styles.box}>
            <input
              type="text"
              style={styles.input}
              onChange={(e) => setTemp(e.target.value)}
            />
            <button type="submit" style={styles.btn} onClick={handleClick}>
              Generate
            </button>
          </div>

          <div
            style={{
              margin: '20px 0',
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ marginRight: 60 }}>
              <label htmlFor="color">Color : </label>
              <input
                type="color"
               
                name=""
                id="color"
                onChange={(e) => setBgColor(e.target.value.substring(1))}
              />
            </div>
            <div>
              <label htmlFor="dimension">Dimensions : </label>
              <input
                type="range"
                min="200"
                id="dimension"
                max="480"
                value={size}
                onChange={(e) => {
                  setSize(e.target.value);
                }}
              />
            </div>
          </div>

          <div
            style={styles.output_box}
          >
            <img src={qrCode} alt="" />
            <a href={qrCode} download="qrcode.png" target="__blank" style={styles.download}>
              Download
            </a>
          </div>
        </div>
      </center>
    </>
  );
}

export default App;

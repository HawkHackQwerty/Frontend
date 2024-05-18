import { ChakraProvider, Heading, Avatar } from "@chakra-ui/react";
import funny from '../assets/funny.jpg';

function Navbar() {
  const styles = {
    navbar: {
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 20px",
      width: "100vw",
      height: "9vh",
      background: "linear-gradient(to bottom, #87CEEB, #ADD8E6)"
    },
    mainHeading: {
      flex: "1",
      textAlign: "center",
      marginLeft: "10"
    },
    avatarContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },
    avatarStyle: {
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)"
    },
    nameHeading: {
      marginTop: "4px"
    }
  };

  return (
    <>
      <ChakraProvider>
        <div style={styles.navbar}>
          <Heading style={styles.mainHeading}>Mesh-Mesh</Heading>
          <div style={styles.avatarContainer}>
            <Avatar src={funny} style={styles.avatarStyle} />
            <Heading size="xs" style={styles.nameHeading}>Fahmi Omer</Heading>
          </div>
        </div>
      </ChakraProvider>
    </>
  );
}

export default Navbar;

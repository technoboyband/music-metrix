import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export default function ButtonPanel(){
    return(<Grid container justifyContent="center">
        <Button>button1</Button>
        <Button>button2</Button>
        <Button>button3</Button>
    </Grid>);
}
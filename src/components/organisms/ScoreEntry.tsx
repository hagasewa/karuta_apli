import { Card, CardHeader, Checkbox, createStyles, Grid, Input, makeStyles, Paper, Table, TableCell, TableContainer, TableHead, TableRow, TextField, Theme, Typography } from "@material-ui/core";
import { VFC } from "react";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      background: '#007BBB',
      color: "#FFF",
      padding: "10px "
    },
    input: {
      padding: '5px',
      width: 50,
      height: 20,
      border: "2px solid #333",
      borderRadius: "3px",
    },
    Card:{
      minWidth:420
    },
    InputRow:{
      padding:"0px 10px",
    },
    InputRowOdd:{
      background:"#F0F0F0",
      padding:"0px 10px"
    }

  }))
export const ScoreEntry: VFC = () => {
  const classes = useStyles()

  return (
    <Card className={classes.Card}>
      <CardHeader title="Aブロック" className={classes.header} />
      <Grid >

        <Grid container className={classes.InputRowOdd}>
          <Grid xs={3}>チーム名</Grid>
          <Grid xs={2}>枚数</Grid>
          <Grid xs={1}>シン</Grid>
          <Grid xs={1}>3人</Grid>
          <Grid xs={1}>ま札</Grid>
          <Grid xs={2}>得点</Grid>
          <Grid xs={2}>預かり</Grid>
        </Grid>
        
        <Grid className={classes.InputRow}>
          <Grid container alignItems="center">
            <Grid xs={3}><Typography variant="subtitle1">チームA</Typography></Grid>
            <Grid xs={2}><input type="number" max="46" min="0" id="GetCardNumber" className={classes.input} />枚</Grid>
            <Grid xs={1}><Checkbox color="primary" /></Grid>
            <Grid xs={1}><Checkbox color="primary" /></Grid>
            <Grid xs={1}><Checkbox color="primary" /></Grid>
            <Grid xs={2}><Typography>40枚</Typography></Grid>
            <Grid xs={2}><input type="number" max="46" min="0" id="GetCardNumber" className={classes.input} />枚</Grid>
          </Grid>
          <Grid container alignItems="center">
            <Grid xs={3}><Typography variant="subtitle1">チームB</Typography></Grid>
            <Grid xs={2}><input type="number" max="46" min="0" id="GetCardNumber" className={classes.input} />枚</Grid>
            <Grid xs={1}><Checkbox color="primary" /></Grid>
            <Grid xs={1}><Checkbox color="primary" /></Grid>
            <Grid xs={1}><Checkbox color="primary" /></Grid>
            <Grid xs={2}><Typography>40枚</Typography></Grid>
            <Grid xs={2}><input type="number" max="46" min="0" id="GetCardNumber" className={classes.input} />枚</Grid>
          </Grid>
        </Grid>
        
        <Grid className={classes.InputRowOdd}>
          <Grid container alignItems="center">
            <Grid xs={3}><Typography variant="subtitle1">チームC</Typography></Grid>
            <Grid xs={2}><input type="number" max="46" min="0" id="GetCardNumber" className={classes.input} />枚</Grid>
            <Grid xs={1}><Checkbox color="primary" /></Grid>
            <Grid xs={1}><Checkbox color="primary" /></Grid>
            <Grid xs={1}><Checkbox color="primary" /></Grid>
            <Grid xs={2}><Typography>40枚</Typography></Grid>
            <Grid xs={2}><input type="number" max="46" min="0" id="GetCardNumber" className={classes.input} />枚</Grid>
          </Grid>
          <Grid container alignItems="center">
            <Grid xs={3}><Typography variant="subtitle1">チームD</Typography></Grid>
            <Grid xs={2}><input type="number" max="46" min="0" id="GetCardNumber" className={classes.input} />枚</Grid>
            <Grid xs={1}><Checkbox color="primary" /></Grid>
            <Grid xs={1}><Checkbox color="primary" /></Grid>
            <Grid xs={1}><Checkbox color="primary" /></Grid>
            <Grid xs={2}><Typography>40枚</Typography></Grid>
            <Grid xs={2}><input type="number" max="46" min="0" id="GetCardNumber" className={classes.input} />枚</Grid>
          </Grid>
        </Grid>
        
        <Grid className={classes.InputRow}>
          <Grid container alignItems="center">
            <Grid xs={3}><Typography variant="subtitle1">チームE</Typography></Grid>
            <Grid xs={2}><input type="number" max="46" min="0" id="GetCardNumber" className={classes.input} />枚</Grid>
            <Grid xs={1}><Checkbox color="primary" /></Grid>
            <Grid xs={1}><Checkbox color="primary" /></Grid>
            <Grid xs={1}><Checkbox color="primary" /></Grid>
            <Grid xs={2}><Typography>40枚</Typography></Grid>
            <Grid xs={2}><input type="number" max="46" min="0" id="GetCardNumber" className={classes.input} />枚</Grid>
          </Grid>
          <Grid container alignItems="center">
            <Grid xs={3}><Typography variant="subtitle1">チームF</Typography></Grid>
            <Grid xs={2}><input type="number" max="46" min="0" id="GetCardNumber" className={classes.input} />枚</Grid>
            <Grid xs={1}><Checkbox color="primary" /></Grid>
            <Grid xs={1}><Checkbox color="primary" /></Grid>
            <Grid xs={1}><Checkbox color="primary" /></Grid>
            <Grid xs={2}><Typography>40枚</Typography></Grid>
            <Grid xs={2}><input type="number" max="46" min="0" id="GetCardNumber" className={classes.input} />枚</Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card >

  )
}
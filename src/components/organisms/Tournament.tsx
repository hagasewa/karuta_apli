import { CardHeader, Grid, makeStyles, Paper, Typography ,Card} from "@material-ui/core"
import { VFC } from "react"

const TreeWidth: number = 30
const TreeHeight: number = 20
const TreeFontSize: number = 10
const useStyles = makeStyles({
  TournamentGrid: {
    margin: "10px 0px"
  },
  UpperTournamentTopMargin: {
    borderBottom: "1px solid black",
    width: TreeWidth,
    height: TreeHeight * 16,
    alignItems: "bottom",
    fontSize: TreeFontSize,
  },
  LowerTournamentTopMargin: {
    width: TreeWidth,
    height: TreeHeight,
    fontSize: TreeFontSize,
  },
  TeamNameStyle:{
    fontSize:TreeFontSize,
    height:TreeHeight,
    width:80,
    marginTop:TreeHeight/2,
    marginBottom:TreeHeight,
    marginLeft:20,
    marginRight:10
  },
  header: {
    background: '#007BBB',
    color: "#FFF",
    padding: "10px "
  },
  TalbeCard:
  {
    marginTop: 20,
    paddingBottom: 10,
    paddingLeft: 0,
    paddingRight: 0,
    width: 320,
    borderRadius: 20,
    background: "#BCE2E8"
  }
})
const useStyleTournamentL5 = makeStyles({
  UpperLine: {
    borderTop: "1px solid black",
    borderRight: "1px solid black",
    width: TreeWidth,
    height: TreeHeight,
    fontSize: TreeFontSize,
  },
  LowerLine: {
    borderBottom: "1px solid black",
    borderRight: "1px solid black",
    width: TreeWidth,
    height: TreeHeight,
    fontSize: TreeFontSize,
  },
  UpperMargin: {
    width: TreeWidth,
    height: TreeHeight ,
    alignItems: "bottom",
    fontSize: TreeFontSize,
  },
  LowerMargin: {
    width: TreeWidth,
    height: TreeHeight,
    fontSize: TreeFontSize,
  }
});
const useStyleTournamentL4 = makeStyles({
  UpperLine: {
    borderTop: "1px solid black",
    borderRight: "1px solid black",
    width: TreeWidth,
    height: TreeHeight * 3,
    fontSize: TreeFontSize,

  },
  LowerLine: {
    borderBottom: "1px solid black",
    borderRight: "1px solid black",
    width: TreeWidth,
    height: TreeHeight,
    fontSize: TreeFontSize,
  },
  UpperMargin: {
    width: TreeWidth,
    height: TreeHeight * 2,
    alignItems: "bottom",
    fontSize: TreeFontSize,
  },
  LowerMargin: {
    width: TreeWidth,
    height: TreeHeight,
    fontSize: TreeFontSize,
  }
});

const useStyleTournamentL3 = makeStyles({
  UpperLine: {
    borderTop: "1px solid black",
    borderRight: "1px solid black",
    width: TreeWidth,
    height: TreeHeight * 7,
    fontSize: TreeFontSize,

  },
  LowerLine: {
    borderBottom: "1px solid black",
    borderRight: "1px solid black",
    width: TreeWidth,
    height: TreeHeight,
    fontSize: TreeFontSize,
  },
  UpperMargin: {
    width: TreeWidth,
    height: TreeHeight * 4,
    alignItems: "bottom",
    fontSize: TreeFontSize,
  },
  LowerMargin: {
    width: TreeWidth,
    height: TreeHeight,
    fontSize: TreeFontSize,
  }
});

const useStyleTournamentL2 = makeStyles({
  UpperLine: {
    borderTop: "1px solid black",
    borderRight: "1px solid black",
    width: TreeWidth,
    height: TreeHeight * 15,
    fontSize: TreeFontSize,

  },
  LowerLine: {
    borderBottom: "1px solid black",
    borderRight: "1px solid black",
    width: TreeWidth,
    height: TreeHeight,
    fontSize: TreeFontSize,
  },
  UpperMargin: {
    width: TreeWidth,
    height: TreeHeight * 8,
    alignItems: "bottom",
    fontSize: TreeFontSize,
  },
  LowerMargin: {
    width: TreeWidth,
    height: TreeHeight,
    fontSize: TreeFontSize,
  }
});
export const Tournament: VFC = () => {

  const classes = useStyles();
  const StyleTournament = []
  StyleTournament[4] = useStyleTournamentL5()
  StyleTournament[3] = useStyleTournamentL4()

  StyleTournament[2] = useStyleTournamentL3()
  StyleTournament[1] = useStyleTournamentL2()


  return (
    <Card className={classes.TalbeCard} >
    <CardHeader title="A????????????" className={classes.header} />
    <Grid container>

      <Grid container direction="row-reverse" justify="flex-end" className={classes.TournamentGrid}>

        <Grid className={classes.TournamentGrid}>
          <Grid container alignItems="flex-end" className={classes.UpperTournamentTopMargin}>30</Grid>
          <Grid container alignItems="flex-start" className={classes.LowerTournamentTopMargin}>20</Grid>
        </Grid>
        <Grid className={classes.TournamentGrid}>
          <Grid container alignItems="flex-end" className={StyleTournament[1].UpperMargin}>30</Grid>
          <Grid container alignItems="flex-start" className={StyleTournament[1].UpperLine}>20</Grid>
          <Grid container alignItems="flex-end" className={StyleTournament[1].LowerLine}>30</Grid>
          <Grid container alignItems="flex-start" className={StyleTournament[1].UpperMargin}>20</Grid>
        </Grid>
        <Grid className={classes.TournamentGrid}>
          <Grid container alignItems="flex-end" className={StyleTournament[2].UpperMargin}>30</Grid>
          <Grid container alignItems="flex-start" className={StyleTournament[2].UpperLine}>20</Grid>
          <Grid container alignItems="flex-end" className={StyleTournament[2].LowerLine}>30</Grid>
          <Grid container alignItems="flex-start" className={StyleTournament[2].UpperMargin}>20</Grid>

          <Grid container alignItems="flex-end" className={StyleTournament[2].UpperMargin}>30</Grid>
          <Grid container alignItems="flex-start" className={StyleTournament[2].UpperLine}>20</Grid>
          <Grid container alignItems="flex-end" className={StyleTournament[2].LowerLine}>30</Grid>
          <Grid container alignItems="flex-start" className={StyleTournament[2].UpperMargin}>20</Grid>
        </Grid>
        <Grid className={classes.TournamentGrid}>
          <Grid container alignItems="flex-end" className={StyleTournament[3].UpperMargin}>30</Grid>
          <Grid container alignItems="flex-start" className={StyleTournament[3].UpperLine}>20</Grid>
          <Grid container alignItems="flex-end" className={StyleTournament[3].LowerLine}>30</Grid>
          <Grid container alignItems="flex-start" className={StyleTournament[3].UpperMargin}>20</Grid>

          <Grid container alignItems="flex-end" className={StyleTournament[3].UpperMargin}>30</Grid>
          <Grid container alignItems="flex-start" className={StyleTournament[3].UpperLine}>20</Grid>
          <Grid container alignItems="flex-end" className={StyleTournament[3].LowerLine}>30</Grid>
          <Grid container alignItems="flex-start" className={StyleTournament[3].UpperMargin}>20</Grid>

          <Grid container alignItems="flex-end" className={StyleTournament[3].UpperMargin}>30</Grid>
          <Grid container alignItems="flex-start" className={StyleTournament[3].UpperLine}>20</Grid>
          <Grid container alignItems="flex-end" className={StyleTournament[3].LowerLine}>30</Grid>
          <Grid container alignItems="flex-start" className={StyleTournament[3].UpperMargin}>20</Grid>

          <Grid container alignItems="flex-end" className={StyleTournament[3].UpperMargin}>30</Grid>
          <Grid container alignItems="flex-start" className={StyleTournament[3].UpperLine}>20</Grid>
          <Grid container alignItems="flex-end" className={StyleTournament[3].LowerLine}>30</Grid>
          <Grid container alignItems="flex-start" className={StyleTournament[3].UpperMargin}>20</Grid>
        </Grid>
        <Grid className={classes.TournamentGrid}>
          <Grid container alignItems="flex-end" className={StyleTournament[4].UpperMargin}></Grid>
          <Grid container alignItems="flex-start" className={StyleTournament[4].UpperLine}></Grid>
          <Grid container alignItems="flex-end" className={StyleTournament[4].LowerLine}></Grid>
          <Grid container alignItems="flex-start" className={StyleTournament[4].UpperMargin}></Grid>

          <Grid container alignItems="flex-end" className={StyleTournament[4].UpperMargin}></Grid>
          <Grid container alignItems="flex-start" className={StyleTournament[4].UpperLine}></Grid>
          <Grid container alignItems="flex-end" className={StyleTournament[4].LowerLine}></Grid>
          <Grid container alignItems="flex-start" className={StyleTournament[4].UpperMargin}></Grid>

          <Grid container alignItems="flex-end" className={StyleTournament[4].UpperMargin}></Grid>
          <Grid container alignItems="flex-start" className={StyleTournament[4].UpperLine}></Grid>
          <Grid container alignItems="flex-end" className={StyleTournament[4].LowerLine}></Grid>
          <Grid container alignItems="flex-start" className={StyleTournament[4].UpperMargin}></Grid>

          <Grid container alignItems="flex-end" className={StyleTournament[4].UpperMargin}></Grid>
          <Grid container alignItems="flex-start" className={StyleTournament[4].UpperLine}></Grid>
          <Grid container alignItems="flex-end" className={StyleTournament[4].LowerLine}></Grid>
          <Grid container alignItems="flex-start" className={StyleTournament[4].UpperMargin}></Grid>

          <Grid container alignItems="flex-end" className={StyleTournament[4].UpperMargin}></Grid>
          <Grid container alignItems="flex-start" className={StyleTournament[4].UpperLine}></Grid>
          <Grid container alignItems="flex-end" className={StyleTournament[4].LowerLine}></Grid>
          <Grid container alignItems="flex-start" className={StyleTournament[4].UpperMargin}></Grid>

          <Grid container alignItems="flex-end" className={StyleTournament[4].UpperMargin}></Grid>
          <Grid container alignItems="flex-start" className={StyleTournament[4].UpperLine}></Grid>
          <Grid container alignItems="flex-end" className={StyleTournament[4].LowerLine}></Grid>
          <Grid container alignItems="flex-start" className={StyleTournament[4].UpperMargin}></Grid>

          <Grid container alignItems="flex-end" className={StyleTournament[4].UpperMargin}></Grid>
          <Grid container alignItems="flex-start" className={StyleTournament[4].UpperLine}></Grid>
          <Grid container alignItems="flex-end" className={StyleTournament[4].LowerLine}></Grid>
          <Grid container alignItems="flex-start" className={StyleTournament[4].UpperMargin}></Grid>

          <Grid container alignItems="flex-end" className={StyleTournament[4].UpperMargin}></Grid>
          <Grid container alignItems="flex-start" className={StyleTournament[4].UpperLine}></Grid>
          <Grid container alignItems="flex-end" className={StyleTournament[4].LowerLine}></Grid>
          <Grid container alignItems="flex-start" className={StyleTournament[4].UpperMargin}></Grid>
        </Grid>
        <Grid className={classes.TournamentGrid}>
          <Paper className={classes.TeamNameStyle}><Typography variant="caption">?????????A</Typography></Paper>
          <Paper className={classes.TeamNameStyle}><Typography variant="caption">?????????B</Typography></Paper>
          <Paper className={classes.TeamNameStyle}><Typography variant="caption">?????????C</Typography></Paper>
          <Paper className={classes.TeamNameStyle}><Typography variant="caption">?????????D</Typography></Paper>
          <Paper className={classes.TeamNameStyle}><Typography variant="caption">?????????E</Typography></Paper>
          <Paper className={classes.TeamNameStyle}><Typography variant="caption">?????????F</Typography></Paper>
          <Paper className={classes.TeamNameStyle}><Typography variant="caption">?????????G</Typography></Paper>
          <Paper className={classes.TeamNameStyle}><Typography variant="caption">?????????H</Typography></Paper>
          <Paper className={classes.TeamNameStyle}><Typography variant="caption">?????????I</Typography></Paper>
          <Paper className={classes.TeamNameStyle}><Typography variant="caption">?????????J</Typography></Paper>
          <Paper className={classes.TeamNameStyle}><Typography variant="caption">?????????K</Typography></Paper>
          <Paper className={classes.TeamNameStyle}><Typography variant="caption">?????????L</Typography></Paper>
          <Paper className={classes.TeamNameStyle}><Typography variant="caption">?????????M</Typography></Paper>
          <Paper className={classes.TeamNameStyle}><Typography variant="caption">?????????N</Typography></Paper>
          <Paper className={classes.TeamNameStyle}><Typography variant="caption">?????????O</Typography></Paper>
          <Paper className={classes.TeamNameStyle}><Typography variant="caption">?????????P</Typography></Paper>
        </Grid>
      </Grid>


    </Grid>
    </Card>


  )
}


/*
  UpperName: {
    borderTop: "1px solid black",
    borderRight: "1px solid black",
    borderLeft: "1px solid black",
    width: 100,
    height: TreeWidth,
    fontSize: 15,

  },
  inLowerName: {
    borderBottom: "1px solid black",
    borderRight: "1px solid black",
    borderLeft: "1px solid black",
    width: 100,
    height: TreeWidth,
    fontSize: 15
  },
  inUpperName: {
    borderTop: "1px solid black",
    borderRight: "1px solid black",
    borderLeft: "1px solid black",
    width: 100,
    height: TreeWidth,
    fontSize: 15,

  },
  LowerName: {
    borderBottom: "1px solid black",
    borderRight: "1px solid black",
    borderLeft: "1px solid black",
    width: 100,
    height: TreeWidth,
    fontSize: 15
  },
  NameLine: {
    borderTop: "1px solid black",
    borderBottom: "1px solid black",
    borderRight: "1px solid black",
    width: 150,
    height: 58
  },
  UpperNameLine: {
    borderTop: "1px solid black",
    borderRight: "1px solid black",
    width: 150,
    paddingBottom: TreeWidth / 2
  },
  LowerNameLine: {
    borderBottom: "1px solid black",
    borderRight: "1px solid black",
    width: 150,
    paddingTop: TreeWidth / 2
  },
  UpperLine: {
    borderTop: "1px solid black",
    borderBottom: "1px solid black",
    borderRight: "1px solid black",
    marginTop: 70,
    marginBottom: 40,
    height: 120
  },
  LowerLine: {
    borderTop: "1px solid black",
    borderBottom: "1px solid black",
    borderRight: "1px solid black",
    marginTop: 120,
    marginBottom: 40,
    height: 130

  },

  Line: {
    borderTop: "1px solid black",
    borderBottom: "1px solid black",
    borderRight: "1px solid black",
    margin: "20px 0px",
    marginTop: 130,
    height: 240
     }
 */




/*
<Box className={classes.Line}>A</Box>

<Box>
  <Box className={classes.UpperLine}>B</Box>
</Box>

<Box>
  <Box className={classes.UpperName}>?????????A</Box>

  <Box className={classes.UpperNameLine}>
    <Box className={classes.inLowerName}>?????????B</Box>
  </Box>

  <Box className={classes.LowerNameLine}>
    <Box className={classes.inUpperName}>?????????C</Box>
  </Box>

  <Box className={classes.LowerName}>?????????D</Box>

  <Box className={classes.UpperName}>?????????E</Box>

  <Box className={classes.UpperNameLine}>
    <Box className={classes.inLowerName}>?????????F</Box>
  </Box>

  <Box className={classes.LowerNameLine}>
    <Box className={classes.inUpperName}>?????????G</Box>
  </Box>

  <Box className={classes.LowerName}>?????????H</Box>
</Box>
*/
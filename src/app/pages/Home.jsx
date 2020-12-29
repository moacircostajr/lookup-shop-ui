import React from 'react'
import '../../App.css'
// import SimpleMap from '../components/SimpleMap'
import { Grid } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import BarraDeFerramentas from '../components/BarraDeFerramentas';
import CartaoCImagem from '../components/CartaoCImagem';
import Banner from '../../assets/img/banner.jpg';



const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
		// flexGrow: 1,
		overflowX: 'hidden',
		overflowY: 'hidden',
		margin: 0,
		backgroundColor: '#ebebeb',
	},
	centralizar: {
		display: 'flex',
		justifyContent: 'center',
	},
	banner: {
		height: '150px',
		width: '90%',
		backgroundColor: 'lightgreen',
		margin: '10px 0',
	},
	nota: {
		height: '150px',
		backgroundColor: 'lightblue',
		margin: '10px 0',
	},
	/* produto: {
		height: '250px',
		backgroundColor: 'yellow',
	}, */
	produtosECategorias: {
		maxWidth: '1366px',
	},
	banner: {
		width: '100%',
		margin: '10px 0',
	},
	categoria: {
		fontSize: '14px',
		fontColor: '#555',
		listStyleType: 'none',
		marginLeft: '6px',
	}
  }),
);

export default function Home() {

	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.centralizar}>
				<BarraDeFerramentas />
			</div>
			<img className={classes.banner} src={Banner} />
			<div className={classes.centralizar}>
				<Grid container spacing={1} className={classes.produtosECategorias}>
					<Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
						<Grid container>
						{/* <div style={{height: 40}}>&nbsp;</div> */}
							<div>
								<ul className = {classes.categoria}>
									<li>Carnes(10)</li>
									<li>Brinquedos(2)</li>
									<li>Roupas</li>
									<li>Informática</li>
								</ul>
							</div>
						</Grid>
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={9} xl={9}>
						<div className={classes.produtos}>
							{/* <div style={{height: 40}}>&nbsp;</div> */}
							{/* <div className="centralizar-bloco-horizontal">
								<div className={classes.banner}>BANNER</div>
							</div>
							<Grid container spacing={1}>
								<Grid item xs={12} sm={12} md={12} lg={2} xl={2} className={classes.nota}>
									<div>NOTA</div>
								</Grid>
								<Grid item xs={12} sm={12} md={12} lg={2} xl={2} className={classes.nota}>
									<div>NOTA</div>
								</Grid>
								<Grid item xs={12} sm={12} md={12} lg={2} xl={2} className={classes.nota}>
									<div>NOTA</div>
								</Grid>
								<Grid item xs={12} sm={12} md={12} lg={2} xl={2} className={classes.nota}>
									<div>NOTA</div>
								</Grid>
								<Grid item xs={12} sm={12} md={12} lg={2} xl={2} className={classes.nota}>
									<div>NOTA</div>
								</Grid>
								<Grid item xs={12} sm={12} md={12} lg={2} xl={2} className={classes.nota}>
									<div>NOTA</div>
								</Grid>
							</Grid> */}
							<Grid container spacing={1}>
								<Grid item xs={12} sm={12} md={12} lg={3} xl={3} className={classes.produto}>
									<div><CartaoCImagem /></div>
								</Grid>
								<Grid item xs={12} sm={12} md={12} lg={3} xl={3} className={classes.produto}>
									<div><CartaoCImagem /></div>
								</Grid>
								<Grid item xs={12} sm={12} md={12} lg={3} xl={3} className={classes.produto}>
									<div><CartaoCImagem /></div>
								</Grid>
								<Grid item xs={12} sm={12} md={12} lg={3} xl={3} className={classes.produto}>
									<div><CartaoCImagem /></div>
								</Grid>
							</Grid>
							<Grid container spacing={1}>
								<Grid item xs={12} sm={12} md={12} lg={3} xl={3} className={classes.produto}>
									<div><CartaoCImagem /></div>
								</Grid>
								<Grid item xs={12} sm={12} md={12} lg={3} xl={3} className={classes.produto}>
									<div><CartaoCImagem /></div>
								</Grid>
								<Grid item xs={12} sm={12} md={12} lg={3} xl={3} className={classes.produto}>
									<div><CartaoCImagem /></div>
								</Grid>
								<Grid item xs={12} sm={12} md={12} lg={3} xl={3} className={classes.produto}>
									<div><CartaoCImagem /></div>
								</Grid>
							</Grid>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={12} md={12} lg={3} xl={3} className={classes.produto}>
									<div><CartaoCImagem /></div>
								</Grid>
								<Grid item xs={12} sm={12} md={12} lg={3} xl={3} className={classes.produto}>
									<div><CartaoCImagem /></div>
								</Grid>
								<Grid item xs={12} sm={12} md={12} lg={3} xl={3} className={classes.produto}>
									<div><CartaoCImagem /></div>
								</Grid>
								<Grid item xs={12} sm={12} md={12} lg={3} xl={3} className={classes.produto}>
									<div><CartaoCImagem /></div>
								</Grid>
							</Grid>
						</div>
					</Grid>
					{/* <Grid item xs={12} sm={12} md={12} lg={2} xl={2}></Grid> */}
				</Grid>
			</div>
		</div>
	)
}

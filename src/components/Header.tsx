import { useMediaQuery, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" sx={{ backgroundColor: "var(--color-card)" }}>
				<Toolbar sx={{ justifyContent: "space-between" }}>
					<Typography
						component={Link}
						to="/"
						variant="h6"
						sx={{
							fontSize: isSmallScreen ? "1.2rem" : "1.25rem",
							color: "var(--color-text)",
							textDecoration: "none",
						}}
					>
						{"Familie Oppskrifter"}
					</Typography>

					<button
						type="button"
						onClick={() => (window.location.href = "/about")}
						style={{
							backgroundColor: "var(--color-card)",
							color: "var(--color-text)",
							border: "none",
							cursor: "pointer",
							fontSize: isSmallScreen ? "1.2rem" : "1rem",
						}}
					>
						Mer info
					</button>
				</Toolbar>
			</AppBar>
		</Box>
	);
}

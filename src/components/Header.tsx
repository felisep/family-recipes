import { useMediaQuery, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";

export default function ButtonAppBar() {
	const [open, setOpen] = React.useState(false);
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" sx={{ backgroundColor: "var(--color-card)" }}>
				<Toolbar sx={{ justifyContent: "space-between" }}>
					<Typography
						component={Link}
						to="/"
						variant="h6"
						sx={{
							fontSize: isSmallScreen ? "1rem" : "1.25rem",
							color: "var(--color-text)",
							textDecoration: "none",
						}}
					>
						{"Familie Oppskrifter"}
					</Typography>

					<Button
						onClick={() => (window.location.href = "/about")}
						sx={{ color: "var(--color-text)" }}
					>
						Mer info
					</Button>
				</Toolbar>
			</AppBar>
			<LoginModal open={open} onClose={handleClose} />
		</Box>
	);
}

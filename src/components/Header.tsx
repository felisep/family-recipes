import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position="static"
				elevation={0}
				sx={{
					backgroundColor: "transparent",
					borderBottom: "2px solid var(--color-text)",
				}}
			>
				<Toolbar
					sx={{
						alignItems: "center",
						gap: { xs: 1.5, sm: 2 },
						justifyContent: "space-between",
						minHeight: { xs: 56, sm: 72 },
						px: { xs: 1.5, sm: 3 },
					}}
				>
					<Typography
						component={Link}
						to="/"
						sx={{
							color: "var(--color-text)",
							fontSize: { xs: "1.3rem", sm: "1.5rem" },
							fontWeight: 700,
							lineHeight: 1.2,
							minWidth: 0,
							overflow: "hidden",
							textDecoration: "none",
							textOverflow: "ellipsis",
							whiteSpace: "nowrap",
						}}
					>
						{"Familie Oppskrifter"}
					</Typography>

					<Typography
						component={Link}
						to="/about"
						sx={{
							color: "var(--color-text)",
							flexShrink: 0,
							fontSize: { xs: "1.1rem", sm: "1.25rem" },
							lineHeight: 1.2,
							textDecoration: "none",
						}}
					>
						Mer info
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
}

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

interface LoginModalProps {
	open: boolean;
	onClose: () => void;
}

export default function LoginModal({ open, onClose }: LoginModalProps) {
	return (
		<Dialog open={open} onClose={onClose}>
			<DialogTitle>Login</DialogTitle>
			<DialogContent>
				<DialogContentText>Please enter your login details.</DialogContentText>
				<TextField
					autoFocus
					margin="dense"
					id="nickname"
					label="Nickname"
					type="text"
					fullWidth
					variant="standard"
				/>
				<TextField
					margin="dense"
					id="password"
					label="Password"
					type="password"
					fullWidth
					variant="standard"
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose} color="primary">
					Cancel
				</Button>
				<Button onClick={onClose} color="primary">
					Login
				</Button>
			</DialogActions>
		</Dialog>
	);
}

import { TextField } from "../Misc/Fields";

export default function Login(props) {
    return (<div className="text-center p-4">
        <h1 className="text-gray-900 text-2xl">Se connecter</h1>
        <div className="grid gap-5">
            <TextField
                id="email"
                label="Adresse email"
                type="email"
                autoComplete="email"
            />
            <TextField
                id="password"
                label="Mot de passe"
                type="password"
                autoComplete="password"
            />
        </div>
    </div>)
}
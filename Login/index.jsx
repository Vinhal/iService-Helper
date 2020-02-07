import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/TextField'
import { ReactComponent as Logo } from './logo.svg'

const validate = (login, password) => {
    const errors = {}

    if (!login) {
        errors.login = 'CAMPO OBRIGATÓRIO'
    }
    if (!password) {
        errors.password = 'CAMPO OBRIGATÓRIO'
    }

    const validated = !Object.keys(errors).length

    return { errors, validated }
}

const Login = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState({
        login: '',
        password: '',
    })


    const onEmailChange = ev => {
        setLogin(ev.target.value)
        if (error.login) setError(init => ({ ...init, login: '' }))
    }

    const onPasswordChange = ev => {
        setPassword(ev.target.value)
        if (error.password) setError(init => ({ ...init, password: '' }))
    }

    const onSubmit = ev => {
        ev.preventDefault()

        const { errors, validated } = validate(login, password)

        if (!validated) {
            setError(init => ({ ...init, ...errors }))
            return
        }

        console.log('AUTHENTICATED')
    }

    return (
        <form
            onSubmit={onSubmit}
            style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            }}
        >
            <Logo
                width="60px"
                fill="#419D78"
            />
            <Input
                label="EMAIL"
                value={login}
                variant="outlined"
                helperText={error.login}
                onChange={onEmailChange}
                error={Boolean(error.login)}
                style={{
                    color: '#2D3047',
                    marginTop: '32px',
                    marginBottom: '16px',
                }}
            />
            <Input
                label="SENHA"
                type="password"
                value={password}
                variant="outlined"
                helperText={error.password}
                onChange={onPasswordChange}
                error={Boolean(error.password)}
            />
            <Button
                type="submit"
                color="secondary"
                variant="contained"
                style={{
                    background: '#419D78',
                    marginTop: '32px',
                }}
            >
                ENTRAR
            </Button>
        </form>
    )
}

export default Login
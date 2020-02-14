import React from 'react'
import PropTypes from 'prop-types'
import Switch from '@material-ui/core/Switch'
import Input from 'components/Input'
import Button from 'components/Button'
import Text from 'components/Text'
import { RegisterForm } from './style'

const Register = ({ changeTheme }) => {
    // handle state

    const onSubmit = ev => {
        ev.preventDefault()
    }

    return (
        <RegisterForm onSubmit={onSubmit}>
            <Input
                required
                label="NOME"
                margin={{ top: 4 }}
            />
            <Input
                required
                name="email"
                label="EMAIL"
            />
            <Input
                required
                label="DATA DE NASCIMENTO"
            />
            <Input
                required
                label="SENHA"
                type="password"
            />
            <Text size={1} color="textSecondary" >
                TEMA DARK
            </Text>
            <Switch
                color="secondary"
                onChange={changeTheme}
            />
            <Button
                type="submit"
                label="ENTRAR"
                color="secondary"
                variant="contained"
                margin={{ top: 4 }}
            />
        </RegisterForm>
    )
}

Register.propTypes = {
    changeTheme: PropTypes.func,
}

export default Register
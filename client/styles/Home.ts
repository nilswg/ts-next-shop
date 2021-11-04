import styled from 'styled-components'
import { Button } from 'semantic-ui-react';


export const Container = styled.div`
    background-color: aquamarine;
    width: 100%;
    height: 100vh;
`

export const SemanticStyledButton = styled(Button)`

    &&&{
        size: small;
        color: blue 
    }
`
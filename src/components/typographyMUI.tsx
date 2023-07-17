import {Typography} from '@mui/material'

export const TypographyMUI = () => {
  return (
    <div>
        <Typography variant='h1'>iam h1</Typography>
        <Typography variant='h2'>iam h2</Typography>
        <Typography variant='h3'>iam h3</Typography>
        <Typography variant='h4' component='h1' color={'gold'}>iam h4 but now h1</Typography>
        <Typography variant='h5' gutterBottom={true}>iam h5,but now i have margin bottom because of guttorBottom</Typography>
        <Typography variant='h6'>iam h6</Typography>
        {/* subtitle is like h6 */}
        <Typography variant='subtitle1'>iam subtitle 1</Typography>
        <Typography variant='subtitle2'>iam subtitle 2</Typography>
        {/* body is like p tag*/}
        <Typography variant='body1'>iam body 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis voluptas eveniet praesentium quasi ullam molestias. Voluptatum labore dolorum obcaecati ducimus impedit similique amet repellat consequuntur sint quos, iure non quasi.</Typography>
        <Typography variant='body2'>iam body 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, consequatur! Rerum qui ex maiores reprehenderit quos magni illo corrupti molestias tempora aliquam ipsa eius quibusdam doloremque delectus, fugit, quam pariatur.</Typography>
        <Typography variant='button'>iam button or span variant</Typography>
    </div>
  )
}

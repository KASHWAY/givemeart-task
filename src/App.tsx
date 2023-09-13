import { Grid, GridItem, Show } from '@chakra-ui/react'
import MainSection from './components/MainSection'
import Nav from './components/Nav'
import MobileText from './components/MobileText'

const App = () => {
  return (
    <Grid templateAreas={{
      base: '"nav" "mainsection"',
      lg: `"mobile-text"`,
    }}>
      <Show above='lg'>
        <GridItem area={'mobile-text'}>
            <MobileText />
        </GridItem>
      </Show>
      
      <Show below='lg'>
        <GridItem area={'nav'}>
            <Nav />
        </GridItem>
        <GridItem area={'mainsection'}>
            <MainSection />
        </GridItem>
    
      </Show>
    </Grid>
  )
}

export default App
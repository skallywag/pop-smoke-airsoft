import '@mantine/core/styles.css'
import '@mantine/dates/styles.css';
import {items} from './routesConfig'
import type {AppProps} from 'next/app'
import logo from '../assets/smokeIcon.jpeg'
import {useDisclosure} from "@mantine/hooks";
import '@mantine/core/styles.css';
import {
    AppShell,
    Burger,
    Divider,
    createTheme,
    Flex,
    Image,
    Group,
    MantineProvider,
    MantineThemeOverride,
    NavLink,
    Title,
} from '@mantine/core'
import '../styles/globals.css'


const myTheme: MantineThemeOverride = createTheme({
    primaryColor: 'orange',
});

export default function _appTsx({Component, pageProps}: AppProps) {
    const [opened, {toggle}] = useDisclosure();

    return (
        <MantineProvider theme={myTheme}>
            <AppShell
                layout="alt"
                padding="md"
                header={{height: 60}}
                footer={{height: 60}}
                styles={{root: {borderRight: 'none'}}}
                navbar={{width: 250, breakpoint: 'sm', collapsed: {mobile: !opened}}}
            >
                <AppShell.Header style={{background: '#333'}}>
                    <Group h="100%" px="md">
                        <Burger
                            size="md"
                            hiddenFrom="sm"
                            opened={opened}
                            onClick={toggle}
                            color={myTheme.primaryColor}
                        />
                    </Group>
                </AppShell.Header>

                <AppShell.Navbar
                    style={{background: '#333', borderRight: 'none'}}>
                    <Burger
                        size="md"
                        hiddenFrom="sm"
                        opened={opened}
                        onClick={toggle}
                        color={myTheme.primaryColor}
                        style={{position: 'absolute', top: '14px', left: '14px'}}
                    />
                    <Flex align={'center'} gap={20} p={'10px'}>
                        <Image
                            src={logo.src}
                            radius={60}
                            fit={'object-cover'}
                            height={40}
                            width={40}
                            style={{width: '40px'}}
                        />
                        <Title size={"md"}>Pop Smoke AS</Title>
                    </Flex>

                    <Divider/>

                    <Group p={"md"}>
                        {Object.entries(items).map(([groupTitle, groupItems]) => (
                            <div key={groupTitle}>
                                <Title order={4} c="white" fz="sm">{groupTitle}</Title>
                                <Group gap={0}>
                                    {groupItems.map(item => (
                                        <NavLink
                                            href={item.path}
                                            key={item.name}
                                            label={item.name}
                                            leftSection={item.icon}
                                            style={{
                                                color: 'white',
                                                borderRadius: '8px',
                                                root: {
                                                    '&:hover': {
                                                        backgroundColor: 'blue'
                                                    },
                                                },
                                            }}
                                        />
                                    ))}
                                </Group>
                            </div>
                        ))}
                    </Group>
                </AppShell.Navbar>
                <AppShell.Main styles={{root: {borderRight: 'none'}}}>
                    <Component {...pageProps} />
                </AppShell.Main>
            </AppShell>
        </MantineProvider>
    )
}
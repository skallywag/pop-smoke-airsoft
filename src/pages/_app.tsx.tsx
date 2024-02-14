import '@mantine/core/styles.css'
import '@mantine/dates/styles.css';
import {items} from './routesConfig'
import type {AppProps} from 'next/app'
import {useDisclosure} from "@mantine/hooks";
import {
    AppShell,
    Burger,
    createTheme,
    Flex,
    Group,
    MantineProvider,
    MantineThemeOverride,
    NavLink,
    Title
} from '@mantine/core'

const myTheme: MantineThemeOverride = createTheme({
    primaryColor: 'orange',
});

export default function _appTsx({Component, pageProps}: AppProps) {
    const [opened, {toggle}] = useDisclosure();

    return (
        <MantineProvider theme={myTheme}>
            <AppShell
                layout="alt"
                header={{height: 60}}
                footer={{height: 60}}
                navbar={{width: 250, breakpoint: 'sm', collapsed: {mobile: !opened}}}
                padding="md"
            >

                <AppShell.Header style={{background: '#333'}}>
                    <Group h="100%" px="md">
                        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm"/>
                    </Group>
                </AppShell.Header>

                <AppShell.Navbar style={{background: '#333'}}>
                    <Flex
                        mih={60}
                        w={"100%"}
                        justify="center"
                        align="center"
                    >
                    </Flex>
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm"/>
                    <Group p="md">

                        {Object.entries(items).map(([groupTitle, groupItems]) => (
                            <div key={groupTitle}>
                                <Title order={4} c="white" fz="sm">{groupTitle}</Title>
                                <Group gap={0}>
                                    {groupItems.map(item => (
                                        <NavLink
                                            href={item.path}
                                            key={item.name}
                                            label={item.name}

                                        />
                                    ))}
                                </Group>
                            </div>
                        ))}
                    </Group>
                </AppShell.Navbar>
                <AppShell.Main>
                    <Component {...pageProps} />
                </AppShell.Main>
                {/*<AppShell.Aside p="md">*/}
                {/*    RIGHT COMPONENT*/}
                {/*</AppShell.Aside>*/}
                {/*<AppShell.Footer p="md">Footer</AppShell.Footer>*/}
            </AppShell>
        </MantineProvider>
    )
}
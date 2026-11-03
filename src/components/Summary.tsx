import { Button, ButtonGroup, Flex, Heading, Image, Text } from '@olegpolyakov/ui';

import GitHubIcon from '@/assets/github.svg';
import LinkedInIcon from '@/assets/linkedin.svg';
import Logo from '@/assets/logo.svg';
import TelegramIcon from '@/assets/telegram.svg';

export default function Summary() {
    return (
        <Flex className="summary" column gap="m" align="center">
            <Flex className="about" column gap="s">
                <Heading
                    className="name"
                    start={<Logo className="logo" />}
                    size="m"
                    content="OLEG POLIAKOV"
                    weight="bold"
                />

                <Image className="photo" src="/photo.jpg" alt="Oleg Poliakov" />

                <Heading content="Senior Full-Stack Engineer" size="s" />

                <Text content="Building products that solve real problems." size="m" />
                <Text content="Product Engineering • System Design • AI" size="s" />
            </Flex>

            <ButtonGroup align="evenly">
                <Button as="a" href="mailto:olegpoliakov@outlook.com" icon={{ name: 'email', filled: true }} />
                <Button as="a" href="https://github.com/olegpolyakov" icon={<GitHubIcon />} />
                <Button as="a" href="https://linkedin.com/in/olegpoliakov-dev" icon={<LinkedInIcon />} />
                <Button as="a" href="https://t.me/olegpolyakov" icon={<TelegramIcon />} />
            </ButtonGroup>

            <Button
                content="Download CV"
                as="a"
                href="/olegpoliakov-cv.pdf"
                target="_blank"
                variant="tinted"
                rel="noopener noreferrer"
                download
            />
        </Flex>
    );
}
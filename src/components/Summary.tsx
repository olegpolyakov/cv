import { Button, ButtonGroup, Flex, Heading, Image, Text } from 'kantanui';

import GitHubIcon from '@/icons/github.svg';
import LinkedInIcon from '@/icons/linkedin.svg';
import TelegramIcon from '@/icons/telegram.svg';

export default function Summary() {
    return (
        <Flex column gap="m">
            <Image className="photo" src="/photo.jpg" alt="Oleg Poliakov" />

            <Flex column gap="s">
                <Heading content="Oleg Poliakov" />
                
                <Text>Systems-oriented full-stack developer with deep experience in scalable architecture, UI logic, and workflow optimization.</Text>
            </Flex>

            <Button
                content="Download CV"
                as="a"
                href="/olegpoliakov-cv.pdf"
                target="_blank"
                variant="tinted"
                rel="noopener noreferrer"
                download
            />

            <ButtonGroup>
                <Button as="a" href="mailto:olegpoliakov@outlook.com" icon="email" />
                <Button as="a" href="https://github.com/olegpolyakov" icon={<GitHubIcon />} />
                <Button as="a" href="https://linkedin.com/in/olegpoliakov-dev" icon={<LinkedInIcon />} />
                <Button as="a" href="https://t.me/olegpolyakov" icon={<TelegramIcon />} />
            </ButtonGroup>
        </Flex>
    );
}
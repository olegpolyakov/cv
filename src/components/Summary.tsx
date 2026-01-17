import { Button, Flex, Heading, Image, Link, Text } from 'kantanui';

export default function Summary() {
    return (
        <Flex column gap="m">
            <Image className="photo" src="/photo.jpg" alt="Oleg Poliakov" />

            <Flex column gap="s">
                <Heading content="Oleg Poliakov" />
                
                <Text>Systems-oriented full-stack developer with deep experience in scalable architecture, UI logic, and workflow optimization.</Text>
            </Flex>

            <Flex column gap="xs">
                <Link as="a" href="mailto:olegpoliakov@outlook.com">olegpoliakov@outlook.com</Link>

                <Flex gap="xxs">
                    <Link href="https://github.com/olegpolyakov">GitHub</Link> | 
                    <Link href="https://linkedin.com/in/olegpoliakov-dev">LinkedIn</Link> | 
                    <Link href="https://t.me/olegpolyakov">Telegram</Link>
                </Flex>
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
        </Flex>
    );
}
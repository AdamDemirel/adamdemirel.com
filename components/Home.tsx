import { Box, Link, Text } from "@chakra-ui/react"

const Card = ({ children }) => <Box width="auto" top={[ "20px", "10%", "10%" ]} left={[ "unset", "unset", 0 ]} right={0} maxW="1250px" zIndex={999} position="absolute" p="15px" m={[ "10px", "10px", "auto" ]} fontWeight={400} bgColor="white" borderRadius="5px">{children}</Box>

const Name = ({ children, display }: any) => <Text as="h1" fontFamily="karla" fontWeight={900} fontSize={[ "40px", "80px", "110px" ]} mt="15px" ml={0} mr={0} mb={[ "30px", "35px", "40px" ]} pb={0} letterSpacing={[ "-2px", "-2px", "-5px" ]} verticalAlign="text-top" display={display || "block"} pt={[ '30px', 0 ]} sx={{ "&::selection": { bgColor: "transparent", color: "inherit" } }}>{children}</Text>

// lineHeight={[ "24px", "32px", "36px" ]}
const TextWrapper = ({ children }) => <Box width="95%" fontFamily="karla" fontSize={[ "20px", "24px", "26px" ]} >{children}</Box>

const Span = ({ children }) => <Text fontFamily="inherit" color="inherit" fontSize="inherit" lineHeight="inherit">{children}</Text>

const Yellow = ({ children }) => <Text as="span" bgColor="#fefecf" color="black" fontFamily="inherit" _hover={{ bgColor: "#191545", color: "#fefecf" }}>{children}</Text>

const Links = ({ children }) => <Box as="ul" fontFamily="karla" letterSpacing="0.4px" lineHeight="24px" fontSize="16px" fontWeight={600} listStyleType="none" m={0} p={0}>{children}</Box>

const Li = ({ children }) => <Box as="li" display="inline" fontFamily="inherit" m="5px" color="#625cdf" _hover={{
  color: "white",
  bgColor: "#625cdf"
}}>{children}</Box>

const Moose = ({ children }) => <Text as="span" color="white" bgColor="#f09a9d" _hover={{
  color: "#f09a9d", bgColor: "#191545"
}}>{children}</Text>

const Blue = ({ children }) => <Text as="span" bgColor="#eff8ff" _hover={{
  bgColor: "#191545",
  color: "#eff8ff"
}}>{children}</Text>

const Purple = ({ children }) => <Text as="span" bgColor="#f1e1ff" _hover={{
  color: "#f1e1ff",
  bgColor: "#191545"
}}>{children}</Text>

const Heading4 = ({ children }) => <Text as="span" bgColor="#f5cf8e"  _hover={{
  bgColor: "#191545",
  color: "#f5cf8e"
}}>{children}</Text>

const Heading5 = ({ children }) => <Text as="span" bgColor="#eaedf0" color="black" _hover={{
  bgColor: "#191545",
  color: "white"
}}>{children}</Text>

const A = props => (
  <Link
    href={props.to}
    target="_blank"
    rel="noopener noreferrer"
    color="inherit"
    textDecor="none"
    _hover={{
      cursor: "pointer",
      color: "inherit",
      textDecor: props?.iot ? "underline" : "auto"
    }}
  >
    {props.children}
  </Link>
)

export {
  Card,
  Name,
  TextWrapper,
  Yellow,
  A,
  Span,
  Blue,
  Purple,
  Links,
  Moose,
  Heading5,
  Heading4,
  Li,
}

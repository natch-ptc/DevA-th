import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        brand: {
            primary: {
                900: '#FF3434',
                800: '#FF8675'
            },
            secondary: {
                900: "#073869",
                800: "#23568F",
                700: "#2F6AFF"
            }
        },
        background: {
            primary: "#111111"
        },
        content: {
            primary: "#FFFFFF"
        }
    }
})
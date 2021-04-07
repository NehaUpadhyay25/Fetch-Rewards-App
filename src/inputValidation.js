export default function validateInput(item) {

    item = typeof item !== "string" ? JSON.stringify(item) : item;
    try {
        item = JSON.parse(item);
    } catch (e) {
        console.log("parseError")
        return false;
    }

    return (typeof item === "object" && item !== null)
}
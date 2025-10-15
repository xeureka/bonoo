import bcrypt from "bcrypt"

export async function hashPassword(password){
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    return hashedPassword
}

export async function validatePassword(givenPassword, storedHash) {
    const validationResult = await bcrypt.compare(givenPassword, storedHash)
    return validationResult
}
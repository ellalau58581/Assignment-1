print("Enter the number of minutes you study in a day for calculus:")
if let input = readLine(), let minutes = Int(input) {
    let hours = minutes / 60
    let percentage = min(100, ((hours / 10) + 1) * 10)
    let random = Int.random(in: 0..<100)
    if random < percentage {
        print("You will pass the calculus exam!")
    } else {
        print("You will not pass the calculus exam.")
    }
} else {
    print("Invalid input.")
}

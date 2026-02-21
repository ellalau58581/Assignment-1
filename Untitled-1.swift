let x = 20
print("Enter the number of minutes you study in a day for calculus:")
if let input = readLine(), let minutes = Int(input) {
    let hours = minutes / 60
    let percentage = min(100, ((hours / 10) + 1) * 10)
    let random = Int.random(in: 0..<100)
    if percentage < 80 {
        print("You need to practice at least \(x) minutes more each day.")
    } else if percentage < 90 {
        print("Good!")
    } else {
        print("Yippe!")
    }
} else {
    print("Invalid input.")
}

def diamond_stars(r):
    for i in range(2 * r - 1):
        mid = r - 1
        spaces = abs(i - mid)
        stars = 2 * (r - abs(i - mid)) - 1
        print(' ' * spaces + '*' * stars)

r = int(input("Enter number of rows: "))
diamond_stars(r)
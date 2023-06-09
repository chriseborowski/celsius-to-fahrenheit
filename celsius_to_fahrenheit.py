FREEZING_ZERO = 32

# Define the converter function
def celsius_to_fahrenheit(temp_c):
  return round((temp_c) * 9/5 + FREEZING_ZERO)

# Collect the user's input to be converted
user_query = int(float(input("Enter the temperature in Celsius: ")))
print(f"You entered: {user_query} C")

# Convert the user's input and print the result
user_answer = celsius_to_fahrenheit(user_query)
print(f"{user_query} degrees Celsius is {user_answer} degrees Fahrenheit.")

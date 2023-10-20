package JavaTask;
import java.util.HashMap;
import java.util.Scanner;

public class Program2 {
    public static int romanToInt(String s)
    {
        HashMap<Character, Integer> romanValues = new HashMap<>();
        romanValues.put('I', 1);
        romanValues.put('V', 5);
        romanValues.put('X', 10);
        romanValues.put('L', 50);
        romanValues.put('C', 100);
        romanValues.put('D', 500);
        romanValues.put('M', 1000);

        int result = 0;
        int prevValue = 0;

        for (int i = s.length() - 1; i >= 0; i--)
        {
            int value = romanValues.get(s.charAt(i));

            if (value < prevValue) {
                result -= value;
            } else {
                result += value;
            }

            prevValue = value;
        }
        return result;
    }

    public static void main(String[] args)
    {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter a Roman Number : ");
        String roman=sc.next();
        int integerEquivalent = romanToInt(roman);
        System.out.println("Integer equivalent: " + integerEquivalent);
    }
}

package Task;

import java.util.Scanner;

public class Program3 {
    public static boolean isPangram(String sentence) {

        sentence = sentence.replaceAll(" ", "").toLowerCase();


        boolean[] letterPresent = new boolean[26];

        for (int i = 0; i < sentence.length(); i++) {
            char ch = sentence.charAt(i);
            if (Character.isLetter(ch)) {

                letterPresent[ch - 'a'] = true;
            }
        }

        for (boolean present : letterPresent) {
            if (!present) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter a String : ");
        String inputSentence =sc.next();

        boolean isPangram = isPangram(inputSentence);

        if (isPangram) {
            System.out.println("The input is a Pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }
}

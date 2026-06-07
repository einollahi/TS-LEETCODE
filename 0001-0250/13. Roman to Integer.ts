namespace Iterative {
  export function romanToInt(s: string) {

    const map: Record<string, number> = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
      'IV': 4,
      'IX': 9,
      'XL': 40,
      'XC': 90,
      'CD': 400,
      'CM': 900
    };

    let result = 0;
    for (let i = 0; i < s.length; i++) {
      const twoChar = s.substring(i, i + 2);
      if (map[twoChar]) {
        result += map[twoChar];
        i++;
      } else {
        result += map[s[i]];
      }
    }

    return result;
  };
}

console.log(Iterative.romanToInt("III"));
console.log(Iterative.romanToInt("LVIII"));
console.log(Iterative.romanToInt("MCMXCIV"));

namespace Recursive {
  export function romanToInt(s: string): number {
    const map: Record<string, number> = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
      'IV': 4,
      'IX': 9,
      'XL': 40,
      'XC': 90,
      'CD': 400,
      'CM': 900
    };

    if (s.length === 0) return 0;

    const twoChar = s.substring(0, 2);
    if (map[twoChar]) {
      return map[twoChar] + romanToInt(s.substring(2));
    } else {
      return map[s[0]] + romanToInt(s.substring(1));
    }
  };
}

console.log(Recursive.romanToInt("III"));
console.log(Recursive.romanToInt("LVIII"));
console.log(Recursive.romanToInt("MCMXCIV"));

namespace Best {
  export function romanToInt(s: string): number {
    const values: Record<string, number> = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };

    let total = 0;
    for (let i = 0; i < s.length; i++) {
      const curr = values[s[i]];
      const next = values[s[i + 1]] || 0;

      if (curr < next) {
        total -= curr;
      } else {
        total += curr;
      }
    }
    return total;
  }
}


console.log(Best.romanToInt("III"));
console.log(Best.romanToInt("LVIII"));
console.log(Best.romanToInt("MCMXCIV"));
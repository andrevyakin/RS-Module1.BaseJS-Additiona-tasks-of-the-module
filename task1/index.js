for (let i = 1937; i >= 1016; i--)
    if (!(i % 3) && !(i % 7) && (i % 2) && (i % 5)) {
        console.log(`Номер билета ${i}`);
        break;
    }

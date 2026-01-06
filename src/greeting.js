function getGreeting(name) {
  if (name && name.length >= 100) {
    throw new Error("Name is too long");
  }

  const greeting = `Hello world!`;

  if (name) {
    const wisher = `From ${name}`;

    return `${greeting} ${wisher}`;
  }

  return greeting;
}

module.exports = { getGreeting };

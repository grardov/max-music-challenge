export class MaxConnectionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "MaxConnectionError";
  }
}

export class MaxConnectionErrorArtist extends Error {
  constructor(message: string) {
    super(message);
    this.name = "MaxConnectionErrorArtist";
  }
}

export class MaxConnectionErrorRelatedArtist extends Error {
  constructor(message: string) {
    super(message);
    this.name = "MaxConnectionErrorRelatedArtist";
  }
}

export class MaxConnectionErrorGenderArtist extends Error {
  constructor(message: string) {
    super(message);
    this.name = "MaxConnectionErrorGenderArtist";
  }
}

export class MaxConnectionErrorGender extends Error {
  constructor(message: string) {
    super(message);
    this.name = "MaxConnectionErrorGender";
  }
}

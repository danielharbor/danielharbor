function animate(typewriter) {
  const sequence = [
    {
      text: "➜  danielharbor git:(main) ✗ ",
      instant: true,
      delayAfter: 500
    },
    {
      text: "whoami\n",
      delayAfter: 500
    },
    {
      text: "software wrangler\n➜  danielharbor git:(main) ✗ ",
      instant: true,
      delayAfter: 500
    },
    {
      text: "scp root@192.168.54.84:rickastley.mp4\b\b\b\b\b\b\b\b\b\b\b\b\b\btechnologies.tgz .\n",
      delayAfter: 1000,
      callback: function () { console.log("daito.. :/") }
    },
    {
      text: "328392 bytes transferred\n➜  danielharbor git:(main) ✗ ",
      instant: true,
      delayAfter: 500
    },
    {
      text: "tar xzf technologies.tgz\n",
      delayAfter: 1000
    },
    {
      text: "➜  danielharbor git:(main) ✗ ",
      instant: true,
      delayAfter: 500
    },
    {
      text: "cd technologies\n",
      delayAfter: 1500
    },
    {
      text: "➜  technologies git:(master) ✗ ",
      instant: true,
      delayAfter: 1000
    },
    {
      text: "ls -l\n",
      delayAfter: 1000
    },
    {
      text: "total 96\ndrwxrwxr-x 2 dan staff   4096 Jan 29 21:59 Rust\n"
      + "drwxr-xr-x 6 dan staff   4096 Jan 29 21:57 Java\n"
      + "-rw-rw-r-- 1 dan staff 328392 Jan 30 21:58 C++\n"
      + "-rw-rw-r-- 1 dan staff 328392 Jan 30 21:58 Javascript\n"
      + "-rw-rw-r-- 1 dan staff 328392 Jan 30 21:58 Golang\n"
      + "-rw-rw-r-- 1 dan staff 328392 Jan 04 21:58 Python\n"
      + "-rw-rw-r-- 1 dan staff 328392 Jan 30 21:58 React\n"
      + "-rw-rw-r-- 1 dan staff 328392 Jan 30 21:58 GraphQL\n"
      + "-rw-rw-r-- 1 dan staff 328392 Jan 30 21:58 HTML\n"
      + "-rw-rw-r-- 1 dan staff 328392 Jan 30 21:58 CSS\n"
      + "➜  technologies git:(main) ✗ ",
      instant: true,
      delayAfter: 500
    },
    {
      text: "\n\n[Press Esc or Enter to exit] ",
      instant: true,
    },
  ];

  typewriter.playSequence(sequence);
}

export default animate;

# Homebrew formula for AIEOS. Place this in a tap (e.g. homebrew-aieos/Formula/aieos.rb),
# then: `brew install <user>/aieos/aieos`.
#
# Until the first tagged release exists, install from git HEAD:
#   brew install --HEAD <user>/aieos/aieos
# When a release is cut, fill in the `stable` url + sha256 (CI can patch these on release).
class Aieos < Formula
  desc "AI Enterprise Operating System — kernel + stdlib for AI companies in Claude Code"
  homepage "https://github.com/REPLACE_OWNER/aieos"
  license "MIT"
  head "https://github.com/REPLACE_OWNER/aieos.git", branch: "main"

  # stable do
  #   url "https://github.com/REPLACE_OWNER/aieos/archive/refs/tags/v0.1.0.tar.gz"
  #   sha256 "REPLACE_ON_RELEASE"
  # end

  depends_on "node"

  def install
    system "npm", "install", "--omit=dev"
    libexec.install Dir["*"]
    (bin/"aieos").write_env_script libexec/"bin/aieos", PATH: "#{Formula["node"].opt_bin}:$PATH"
  end

  def caveats
    <<~EOS
      Activate AIEOS for your Claude Code sessions:
        aieos setup
      This registers the global /aieos command and a machine-wide bootstrap in ~/.claude.
      Remove it later with:
        aieos teardown
    EOS
  end

  test do
    assert_match "aieos", shell_output("#{bin}/aieos version")
  end
end

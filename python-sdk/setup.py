from setuptools import setup, find_packages

with open("README.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()

setup(
    name="dmcs-sdk",
    version="1.1.2",
    author="DMCS",
    description="Python SDK for Dynamic Multi-Dimensional Classification Standard",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/shadstradamus/DMCS",
    packages=find_packages(),
    include_package_data=True,
    package_data={
        "dmcs_sdk": ["data/*.json", "data/*.csv"],
    },
    classifiers=[
        "Development Status :: 4 - Beta",
        "Intended Audience :: Developers",
        "Intended Audience :: Financial and Insurance Industry",
        "Topic :: Office/Business :: Financial",
        "License :: OSI Approved :: Apache Software License",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3.10",
        "Programming Language :: Python :: 3.11",
        "Programming Language :: Python :: 3.12",
    ],
    python_requires=">=3.8",
    install_requires=[],
    extras_require={
        "dev": ["pytest>=7.0", "black>=22.0", "mypy>=0.990"],
    },
)

#!/usr/bin/env python

import os
import re
from grpc_tools import protoc

base_module = "autogen"

params = [
    (
        '',
        '--proto_path=protos/',
        '--python_out={}/'.format(base_module),
        '--grpc_python_out={}'.format(base_module),
        'protos/work.proto',
    ),
    (
        '',
        '--proto_path=protos/',
        '--python_out={}/'.format(base_module),
        '--grpc_python_out={}'.format(base_module),
        'protos/changelog.proto',
    )
]

for param in params:
    protoc.main(param)
    name, extension = os.path.splitext(os.path.basename(param[4]))
    module_name = "{}_pb2".format(name)
    files = [
        os.path.join('{}'.format(base_module), "{}_grpc.py".format(module_name)),
        os.path.join('{}'.format(base_module), "{}.py".format(module_name))
    ]

    for src_filename in files:
        with open(src_filename, 'r+') as file:
            content = re.sub('import\s(.*?)_pb2\sas\s(.*?)__pb2', r'import {}.\1_pb2 as \2__pb2'.format(base_module),
                             file.read(), flags=re.M)
            file.seek(0)
            file.write(content)
